import { IconDarwinClose, IconDarwinMaximize, IconDarwinMinimize, IconDarwinRestore, IconType } from './Icon';
import React, { useEffect, useState } from 'react';

const SystemControllerWrap = () => {
  const [styleMinimize, setStyleMinimize] = useState<IconType>({ width: 18, height: 18, color: '#666' });
  const [styleMaximize, setStyleMaximize] = useState<IconType>({ width: 16, height: 16, color: '#666' });
  const [styleRestore, setStyleRestore] = useState<IconType>({ width: 16, height: 16, color: '#777' });
  const [styleClose, setStyleClose] = useState<IconType>({ width: 14, height: 14, color: '#555' });
  const [maximize, setmaximize] = useState(false);
  const [focus, setfocus] = useState(true);
  const [hover, sethover] = useState(false);

  useEffect(() => {
    nw.Window.get().on('restore', setmaximize.bind(null, false));
    nw.Window.get().on('maximize', setmaximize.bind(null, true));
    nw.Window.get().on('focus', setfocus.bind(null, true));
    nw.Window.get().on('blur', setfocus.bind(null, false));
    return () => {
      nw.Window.get()['removeAllListeners']('restore');
      nw.Window.get()['removeAllListeners']('maximize');
      nw.Window.get()['removeAllListeners']('focus');
      nw.Window.get()['removeAllListeners']('blur');
    };
  }, []);

  useEffect(() => {
    setStyleClose({ ...styleClose, color: focus ? '#fe5f56' : '#dcdddd' });
    setStyleMinimize({ ...styleMinimize, color: focus && !maximize ? '#ffbd2d' : '#dcdddd' });
    setStyleMaximize({ ...styleMaximize, color: focus ? '#28ca40' : '#dcdddd' });
    setStyleRestore({ ...styleRestore, color: focus ? '#28ca40' : '#dcdddd' });
  }, [focus, maximize]);
  useEffect(() => {
    if (!focus) return;
    setStyleClose({ ...styleClose, color: hover ? '#222' : '#fe5f56' });
    if (maximize) {
      // 最大屏时不能最小化
      setStyleMinimize({ ...styleMinimize, color: '#ffbd2d' });
    } else {
      setStyleMinimize({ ...styleMinimize, color: hover ? '#666' : '#ffbd2d' });
    }
    setStyleMaximize({ ...styleMaximize, color: hover ? '#444' : '#28ca40' });
    setStyleRestore({ ...styleRestore, color: hover ? '#444' : '#28ca40' });
  }, [hover, maximize]);
  useEffect(() => {
    sethover(false);
  }, [maximize]);

  return (
    <span className="win-icon-container" onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)}>
      <span
        style={{ backgroundColor: focus ? '#fe5f56' : '#dcdddd', border: `1px solid ${focus ? '#e34942' : '#ced4cc'}` }}
        className="win-icon"
        onClick={() => nw.App.quit()}
      >
        <IconDarwinClose {...styleClose} />
      </span>
      <span
        className="win-icon"
        style={{ backgroundColor: focus ? '#ffbd2d' : '#dcdddd', border: `1px solid ${focus ? '#e0a32d' : '#ced4cc'}` }}
        onClick={() => !maximize && nw.Window.get().minimize()}
      >
        <IconDarwinMinimize {...styleMinimize} />
      </span>
      <span
        className="win-icon"
        style={{ backgroundColor: focus ? '#28ca40' : '#dcdddd', border: `1px solid ${focus ? '#30ae2e' : '#ced4cc'}` }}
        onClick={() => nw.Window.get()[maximize ? 'restore' : 'maximize']()}
      >
        {maximize ? <IconDarwinRestore {...styleRestore} /> : <IconDarwinMaximize {...styleMaximize} />}
      </span>

      <style jsx>{`
        .win-icon-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 68px;
          padding: 0 7.5px;
        }
        .win-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 12px;
          height: 12px;
          border-radius: 6px;
          overflow: hidden;
        }
      `}</style>
    </span>
  );
};

export default SystemControllerWrap;
