export const Action = {
  Left: "Left",
  FastDrop: "FastDrop",
  Pause: "Pause",
  Quit: "Quit",
  Right: "Right",
  Rotate: "Rotate",
  SlowDrop: "SlowDrop"
};

enum KeyboardKey {
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  KeyQ,
  KeyP,
  Space,
}

type KeyboardKeyString = keyof typeof KeyboardKey;

export const Key = {
  ArrowUp: Action.Rotate,
  ArrowDown: Action.SlowDrop,
  ArrowLeft: Action.Left,
  ArrowRight: Action.Right,
  KeyQ: Action.Quit,
  KeyP: Action.Pause,
  Space: Action.FastDrop
};

export const actionIsDrop = (action: string) =>
  [Action.SlowDrop, Action.FastDrop].includes(action);

export const actionForKey = (keyCode: string) => Key[keyCode as KeyboardKeyString];
