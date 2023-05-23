import React from 'react';
import { Layout } from 'antd';
import { ImagesList } from './components/ImagesList/ImagesList';
import { AddImage } from './components/AddImage/AddImage';
import { ViewMoreBtn } from './components/ViewMoreBtn/ViewMoreBtn';
import { PictureOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import './App.css';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div className="logo-wrapper">
            <PictureOutlined className="logo-icon" />
            <span className="logo-text">Snappery</span>
          </div>
          <AddImage />
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px' }}>
          <ImagesList />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <ViewMoreBtn />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
