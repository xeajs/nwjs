import React from 'react';

export interface IconType {
  width: number;
  height: number;
  color: string;
}

/** @Win32 */
export const IconWin32Close: React.FC<IconType> = ({ width, height, color }) => {
  return (
    <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5512" width={width} height={height}>
      <path
        d="M822.003 776.822l0.023-0.022-575.522-575.483c-5.788-5.792-13.786-9.374-22.621-9.374-17.662 0-31.98 14.318-31.98 31.98 0 8.834 3.582 16.832 9.373 22.62L776.112 821.34c5.84 6.278 14.167 10.21 23.417 10.21 17.662 0 31.98-14.318 31.98-31.98 0-8.901-3.638-16.949-9.506-22.747z"
        p-id="5513"
        fill={color}
      ></path>
      <path
        d="M776.784 201.448l-0.023-0.022-575.483 575.521c-5.792 5.788-9.374 13.786-9.374 22.621 0 17.663 14.318 31.98 31.98 31.98 8.834 0 16.832-3.582 22.62-9.373L821.301 247.34c6.278-5.839 10.21-14.166 10.21-23.416 0-17.662-14.318-31.98-31.98-31.98-8.902 0-16.95 3.637-22.747 9.505z"
        p-id="5514"
        fill={color}
      ></path>
    </svg>
  );
};

export const IconWin32Minimize: React.FC<IconType> = ({ width, height, color }) => {
  return (
    <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6887" width={width} height={height}>
      <path d="M128 512h768a25.6 25.6 0 1 1 0 51.2h-768a25.6 25.6 0 1 1 0-51.2z" p-id="6888" fill={color}></path>
    </svg>
  );
};

export const IconWin32Maximize: React.FC<IconType> = ({ width, height, color }) => {
  return (
    <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7442" width={width} height={height}>
      <path d="M832 832H192V192h640v640z m50-690H142v740h740V142z" p-id="7443" fill={color}></path>
    </svg>
  );
};

export const IconWin32Restore: React.FC<IconType> = ({ width, height, color }) => {
  return (
    <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16676" width={width} height={height}>
      <path
        d="M255.13 382.7h425.11v382.65h-425.1l-0.01-382.65z m42.64 340.17l340.09-0.09V425.34H297.77v297.53z m382.46-85.1h42.64V340.32H382.7v42.38h-42.38v-85.02h425l0.04 382.47h-85.21l0.08-42.38z"
        p-id="16677"
        fill={color}
      ></path>
    </svg>
  );
};

/** @Darwin */
export const IconDarwinClose: React.FC<IconType> = ({ width, height, color }) => {
  return (
    <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5512" width={width} height={height}>
      <path
        d="M822.003 776.822l0.023-0.022-575.522-575.483c-5.788-5.792-13.786-9.374-22.621-9.374-17.662 0-31.98 14.318-31.98 31.98 0 8.834 3.582 16.832 9.373 22.62L776.112 821.34c5.84 6.278 14.167 10.21 23.417 10.21 17.662 0 31.98-14.318 31.98-31.98 0-8.901-3.638-16.949-9.506-22.747z"
        p-id="5513"
        fill={color}
      ></path>
      <path
        d="M776.784 201.448l-0.023-0.022-575.483 575.521c-5.792 5.788-9.374 13.786-9.374 22.621 0 17.663 14.318 31.98 31.98 31.98 8.834 0 16.832-3.582 22.62-9.373L821.301 247.34c6.278-5.839 10.21-14.166 10.21-23.416 0-17.662-14.318-31.98-31.98-31.98-8.902 0-16.95 3.637-22.747 9.505z"
        p-id="5514"
        fill={color}
      ></path>
    </svg>
  );
};

export const IconDarwinMinimize: React.FC<IconType> = ({ width, height, color }) => {
  return (
    <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6887" width={width} height={height}>
      <style jsx>{`
        svg {
          transform: scale(1, 2);
        }
      `}</style>
      <path d="M128 512h768a25.6 25.6 0 1 1 0 51.2h-768a25.6 25.6 0 1 1 0-51.2z" p-id="6888" fill={color}></path>
    </svg>
  );
};

export const IconDarwinMaximize: React.FC<IconType> = ({ width, height, color }) => {
  return (
    <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1753" width={width} height={height}>
      <style jsx>{`
        svg {
          transform: scale(1.12);
        }
      `}</style>
      <path
        d="M749.056 230.4l-343.552 1.536c-24.576 0-30.208 14.336-12.8 31.232l368.128 368.128c17.408 17.408 31.232 11.264 31.232-12.8l1.024-343.552c0-24.576-19.968-44.544-44.032-44.544zM263.168 392.192c-17.408-17.408-31.232-11.264-31.232 12.8l-1.024 343.552c0 24.576 19.968 44.032 44.032 44.032l343.552-1.536c24.576 0 30.208-14.336 12.8-31.232L263.168 392.192z"
        p-id="1754"
        fill={color}
      ></path>
    </svg>
  );
};

export const IconDarwinRestore: React.FC<IconType> = ({ width, height, color }) => {
  return (
    <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11937" width={width} height={height}>
      <style jsx>{`
        svg {
          transform: scale(1.12);
        }
      `}</style>
      <path
        d="M128 512h342.826667a42.666667 42.666667 0 0 1 42.666666 42.666667L512 897.152 128 512z m769.493333-0.426667H554.666667a42.666667 42.666667 0 0 1-42.666667-42.666666V128.128l385.493333 383.36z"
        fill={color}
        p-id="11938"
      ></path>
    </svg>
  );
};
