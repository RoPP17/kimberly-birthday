%% =========================================================================
% ANIMACIÓN CINEMÁTICA DE CUMPLEAÑOS — "KIMBERLY"
% Proyecto: Experiencia Web Interactiva de Cumpleaños
% Autor: Roberto Andrés Pepe Sánchez
% =========================================================================
% Este script genera un video en formato MP4 con una animación cinemática
% de trazo de partículas, destellos dorados y fuegos artificiales alrededor
% del nombre de Kimberly.
%
% INSTRUCCIONES DE USO:
% 1. Abre MATLAB.
% 2. Ejecuta este script con 'animacion_kimberly'.
% 3. El script creará automáticamente el archivo 'animacion-nombre.mp4' y
%    lo copiará directamente a 'public/assets/video/' de la web.
% =========================================================================

clear; clc; close all;

%% 1. PARÁMETROS DE VIDEO Y RESOLUCIÓN
outputFileName = 'animacion-nombre.mp4';
targetDir = fullfile('..', 'public', 'assets', 'video');
fps = 30;
durationSec = 6.5;
totalFrames = round(fps * durationSec);
figWidth = 1280;
figHeight = 720;

%% 2. CONFIGURACIÓN DE LA FIGURA
hFig = figure('Name', 'Generando Animación para Kimberly...', ...
              'Color', [0.07, 0.06, 0.08], ...
              'Position', [100, 100, figWidth, figHeight], ...
              'MenuBar', 'none', ...
              'ToolBar', 'none', ...
              'NumberTitle', 'off', ...
              'Visible', 'on');

ax = axes('Parent', hFig, ...
          'Color', [0.07, 0.06, 0.08], ...
          'Position', [0, 0, 1, 1], ...
          'XLim', [-10, 10], ...
          'YLim', [-6, 6]);
hold(ax, 'on');
axis(ax, 'off');

%% 3. PREPARACIÓN DE PARTICULAS Y DESTELLOS
numParticles = 180;
pX = (rand(1, numParticles) - 0.5) * 18;
pY = (rand(1, numParticles) - 0.5) * 10;
pSpeed = 0.02 + rand(1, numParticles) * 0.04;
pAlpha = rand(1, numParticles);

% Colores cálidos de autor (Coral, Dorado, Rosa durazno, Blanco brillante)
colors = [
    1.00, 0.42, 0.42; % Coral
    0.98, 0.69, 0.58; % Durazno
    0.91, 0.72, 0.45; % Oro
    0.66, 0.55, 0.73; % Lavanda
    1.00, 1.00, 1.00  % Blanco estelar
];

%% 4. INICIALIZACIÓN DE VIDEO WRITER
try
    videoObj = VideoWriter(outputFileName, 'MPEG-4');
catch
    % En caso de que MPEG-4 no esté soportado en la plataforma, usar Motion JPEG AVI
    videoObj = VideoWriter(outputFileName, 'Motion JPEG AVI');
end
videoObj.FrameRate = fps;
videoObj.Quality = 95;
open(videoObj);

fprintf('Generando animación cinematográfica (%d frames)...\n', totalFrames);

%% 5. BUCLE PRINCIPAL DE ANIMACIÓN
for frameIdx = 1:totalFrames
    t = frameIdx / totalFrames;
    cla(ax);
    
    % --- A. Fondo de partículas flotantes suaves ---
    pY = pY + pSpeed;
    pY(pY > 6) = -6;
    for i = 1:numParticles
        colIdx = mod(i, size(colors, 1)) + 1;
        alphaFactor = 0.3 + 0.7 * abs(sin(t * 4 + i));
        plot(ax, pX(i), pY(i), '.', ...
             'MarkerSize', 8 + 4 * sin(t * 3 + i), ...
             'Color', [colors(colIdx, :) * alphaFactor]);
    end
    
    % --- B. Revelación cinemática del Nombre "KIMBERLY" ---
    if t < 0.6
        % Fase 1: Entrada y expansión luminosa con escala suave
        scale = 0.6 + 0.4 * (t / 0.6);
        currentAlpha = min(1, t / 0.3);
    else
        % Fase 2: Mantenimiento con pulso armónico
        scale = 1.0 + 0.03 * sin((t - 0.6) * 12);
        currentAlpha = 1.0;
    end
    
    % Texto resplandor exterior (Glow sutil)
    text(ax, 0, 0.6, 'KIMBERLY', ...
         'FontName', 'Georgia', ...
         'FontSize', 54 * scale, ...
         'FontWeight', 'bold', ...
         'HorizontalAlignment', 'center', ...
         'Color', [1.0, 0.42, 0.42, 0.25 * currentAlpha]);
     
    % Texto dorado interior brillante
    text(ax, 0, 0.6, 'KIMBERLY', ...
         'FontName', 'Georgia', ...
         'FontSize', 50 * scale, ...
         'FontWeight', 'bold', ...
         'HorizontalAlignment', 'center', ...
         'Color', [0.98, 0.94, 0.88, currentAlpha]);
     
    % --- C. Subtítulo que aparece con elegancia ---
    if t > 0.45
        subAlpha = min(1, (t - 0.45) / 0.25);
        text(ax, 0, -1.2, '✨ ¡Feliz Cumpleaños! ✨', ...
             'FontName', 'Arial', ...
             'FontSize', 18, ...
             'FontAngle', 'italic', ...
             'HorizontalAlignment', 'center', ...
             'Color', [0.91, 0.72, 0.45, subAlpha]);
    end
    
    % --- D. Destellos estelares que orbitan el nombre ---
    if t > 0.3
        numStars = 8;
        for s = 1:numStars
            angle = t * 6 + s * (2 * pi / numStars);
            r = 5.2 + 0.4 * sin(t * 8 + s);
            sx = r * cos(angle);
            sy = 0.6 + (r * 0.4) * sin(angle);
            plot(ax, sx, sy, 'p', ...
                 'MarkerSize', 12, ...
                 'MarkerFaceColor', [1, 0.84, 0], ...
                 'MarkerEdgeColor', [1, 1, 1]);
        end
    end
    
    drawnow;
    
    % Capturar frame y escribir al video
    currFrame = getframe(hFig);
    writeVideo(videoObj, currFrame);
    
    if mod(frameIdx, 30) == 0
        fprintf('Progreso: %d%% completado...\n', round((frameIdx / totalFrames) * 100));
    end
end

close(videoObj);
close(hFig);

%% 6. COPIA AUTOMÁTICA AL DIRECTORIO DEL PROYECTO WEB
if ~exist(targetDir, 'dir')
    mkdir(targetDir);
end
destFile = fullfile(targetDir, 'animacion-nombre.mp4');
copyfile(outputFileName, destFile);

fprintf('\n=======================================================\n');
fprintf('✨ ¡ANIMACIÓN GENERADA CON ÉXITO!\n');
fprintf('Archivo local: %s\n', outputFileName);
fprintf('Copiado automáticamente a: %s\n', destFile);
fprintf('Ya puedes abrir la web para ver tu video integrado.\n');
fprintf('=======================================================\n');
