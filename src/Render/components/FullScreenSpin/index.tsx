import React, { PureComponent } from 'react';

import { Spin } from 'antd';

export default class extends PureComponent {
  render() {
    return (
      <section className="full-screen-spin">
        <Spin />
        <style jsx>{`
          .full-screen-spin {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </section>
    );
  }
}
