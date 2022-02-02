let interval: NodeJS.Timeout | null = null;

class CountdownTimer {
  private _time: number;
  private _callback: (time: number) => void;
  private _endCallback: () => void;

  constructor(time: number, callback: (time: number) => void, endCallback: () => void) {
    this._time = time;
    this._callback = callback;
    this._endCallback = endCallback;
  }

  public start() {
    interval = setInterval(() => {
      if (this._time > 0) {
        this._callback(this._time);
        this._time--;
      } else {
        this._callback(this._time);
        this.stop();
        this._endCallback();
      }
    }, 1000);
  }

  public stop() {
    if (interval) clearInterval(interval);
  }

  public pause() {
    if (interval) clearInterval(interval);
  }
}

export default CountdownTimer;
