import Head from 'next/head'
import { Row, Col, Breadcrumb, Affix } from 'antd'
import axios from 'axios'
import Header from '../components/Header/Header'
import Author from '../components/Author/Author'
import Advert from '../components/Advert/Advert'
import Footer from '../components/Footer/Footer'
import '../styles/pageStyle/detail.css'
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import Tocify from '../components/tocify.tsx'
import servicePath from '../config/apiUrl'

export default function Detailed(props) {

  const tocify = new Tocify()
  const renderer = new marked.Renderer()

  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };

  marked.setOptions({                     // 自定义的Renderer渲染出的格式
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {          // 设置代码高亮
      return hljs.highlightAuto(code).value;
    }
  });

  let html = marked(props.article_content)
  // console.log(html);

  return (
    <div >
      <Head>
        <title>zengjichaoren's blog</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify='center'>
        <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className='bread-div'>
              <Breadcrumb>
                <Breadcrumb.Item><a href='/'>首页</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href='/'>文章列表</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href='/'>生活</a></Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className='detailed-title'>
                React文章-增肌超人
              </div>
              <div className='list-icon center'>
                <CalendarOutlined /><span>2019-06-28</span>
                <FolderOutlined /><span>文章列表</span>
                <FireOutlined /><span>999+</span>
              </div>
              <div className="detailed-content" dangerouslySetInnerHTML={{ __html: html }}>

              </div>
            </div>
          </div>
        </Col>
        <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              <div className="toc-list">
                {tocify && tocify.render()}
              </div>
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

Detailed.getInitialProps = async (context) => {

  console.log(context.query.id)
  let id = context.query.id
  const promise = new Promise((resolve) => {

    axios(servicePath.getArticleById + id).then(
      (res) => {
        // console.log(res)
        resolve(res.data.data[0])
      }
    )
  })

  return await promise
}
