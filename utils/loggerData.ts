export type TTimer = {
  name: string;
  started: Date;
  breakStart: Date | null;
  breakEnds: Date | null;
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
