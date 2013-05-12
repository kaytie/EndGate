/// <reference path="../../Scripts/endGate.core.client.ts" />

class CameraDragController {
    public Dragging: bool;

    private _dragActive: bool;
    private _downAt: eg.Vector2d;
    private _upAt: eg.Vector2d;
    private _cameraStartPosition: eg.Vector2d;

    constructor(canvas: HTMLCanvasElement, camera: eg.Rendering.Camera2d, keyboardHandler: eg.Input.KeyboardHandler, mouseHandler: eg.Input.MouseHandler) {
        this.Dragging = false;
        this._dragActive = false;

        keyboardHandler.OnCommandPress("space", (e: eg.Input.KeyboardCommandEvent) => {
            this._dragActive = !this._dragActive;

            if (this._dragActive) {
                canvas.style.cursor = "move";
            }
            else {
                canvas.style.cursor = "default";
            }
        });

        mouseHandler.OnDown.Bind((e: eg.Input.IMouseClickEvent) => {
            this._downAt = e.Position;
            this._cameraStartPosition = camera.Position.Clone();
            this.Dragging = true;
        });

        mouseHandler.OnUp.Bind((e: eg.Input.IMouseClickEvent) => {
            this._upAt = e.Position;
            this._cameraStartPosition = null;
            this.Dragging = false;
        });

        mouseHandler.OnMove.Bind((e: eg.Input.IMouseEvent) => {
            if (this.Dragging && this._dragActive) {
                camera.Position = this._cameraStartPosition.Add(this._downAt.Subtract(e.Position));
            }
        });
    }
}