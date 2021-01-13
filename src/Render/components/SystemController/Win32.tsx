import { IconType, IconWin32Close, IconWin32Maximize, IconWin32Minimize, IconWin32Restore } from './Icon';
import React, { useEffect, useState } from 'react';

const SystemControllerWrap = () => {
  const [styleMinimize] = useState<IconType>({ width: 18, height: 18, color: '#666' });
  const [styleMaximize] = useState<IconType>({ width: 16, height: 16, color: '#666' });
  const [styleRestore] = useState<IconType>({ width: 24, height: 24, color: '#777' });
  const [styleClose, setStyleClose] = useState<IconType>({ width: 18, height: 18, color: '#555' });
  const [maximize, setmaximize] = useState(false);

  useEffect(() => {
    nw.Window.get().on('restore', setmaximize.bind(null, false));
    nw.Window.get().on('maximize', setmaximize.bind(null, true));
    return () => {
      nw.Window.get()['removeAllListeners']('restore');
      nw.Window.get()['removeAllListeners']('maximize');
    };
  }, []);

  return (
    <span className="win-icon-container">
      <span className="win-icon" onClick={() => nw.Window.get().minimize()}>
        <IconWin32Minimize {...styleMinimize} />
      </span>
      <span className="win-icon" onClick={() => nw.Window.get()[maximize ? 'restore' : 'maximize']()}>
        {maximize ? <IconWin32Restore {...styleRestore} /> : <IconWin32Maximize {...styleMaximize} />}
      </span>
      <span
        className="win-icon win-icon-close"
        onMouseEnter={() => setStyleClose({ ...styleClose, color: '#fff' })}
        onMouseLeave={() => setStyleClose({ ...styleClose, color: '#666' })}
        onClick={() => nw.App.quit()}
      >
        <IconWin32Close {...styleClose} />
      </span>
      <style jsx>{`
        .win-icon-container {
          display: flex;
          width: 138px;
        }
        .win-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 46px;
          height: 30px;
        }
        .win-icon:hover {
          background-color: rgba(0, 0, 0, 0.08);
        }
        .win-icon.win-icon-close:hover {
          background-color: #e81123;
        }
      `}</style>
    </span>
  );
};

export default SystemControllerWrap;
