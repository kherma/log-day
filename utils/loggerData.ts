type TTimer = {
  name: string;
  started: Date;
  isRunning: boolean;
};

export type TLoggerData = {
  dayStarted: boolean;
  total?: Date;
  timers: TTimer[];
};

export const loggerData: TLoggerData = {
  dayStarted: false,
  timers: [],
};
