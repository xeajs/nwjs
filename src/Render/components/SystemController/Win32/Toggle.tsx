import React from 'react';

/** 满屏 ===> 非满屏 */
const WrapFullToNormal: React.FC = () => {
  const __size__ = 24;
  const __color__ = '#888';
  return (
    <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16676" width={__size__} height={__size__}>
      <path
        d="M255.13 382.7h425.11v382.65h-425.1l-0.01-382.65z m42.64 340.17l340.09-0.09V425.34H297.77v297.53z m382.46-85.1h42.64V340.32H382.7v42.38h-42.38v-85.02h425l0.04 382.47h-85.21l0.08-42.38z"
        p-id="16677"
        fill={__color__}
      ></path>
    </svg>
  );
};

/** 非满屏 ===> 满屏 口 图标 */
const WrapNormalToFull: React.FC = (): React.ReactElement => {
  const __size__ = 15;
  const __color__ = '#666';
  return (
    <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7442" width={__size__} height={__size__}>
      <path d="M832 832H192V192h640v640z m50-690H142v740h740V142z" p-id="7443" fill={__color__}></path>
    </svg>
  );
};

const Wrap: React.FC = () => {
  const getismaximize = () => nw.Window.get().width >= window.screen.availWidth;
  const [ismaximize, setismaximize] = React.useState(getismaximize());

  const onFunc = () => {
    ismaximize ? nw.Window.get().restore() : nw.Window.get().maximize();
    setismaximize(!ismaximize);
  };

  React.useEffect(() => {
    const resize = () => {
      setTimeout(() => {
        setismaximize(getismaximize());
      }, 120);
    };
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
  return (
    <>
      <span onClick={onFunc}>{ismaximize ? <WrapFullToNormal /> : <WrapNormalToFull />}</span>
      <style jsx>{`
        span {
          padding: 0 16px;
          display: flex;
          justify-content: center;
          width: auto;
          align-items: center;
          background-color: transparent;
        }
        span:hover {
          background-color: rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </>
  );
};

export default Wrap;
