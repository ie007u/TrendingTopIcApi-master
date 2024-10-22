import type { FC } from "hono/jsx";
import { html } from "hono/html";
import Layout from "./Layout.js";

const Home: FC = () => {
  return (
    <Layout title="DailyHot API">
      <main className="home">
        <div className="img">
          <img
            src="data:image/png;base64,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"
            alt="logo"
          />
        </div>
        <div className="title">
          <h1 className="title-text">TrendingTopic API</h1>
          <span className="title-tip">服务已正常运行</span>
        </div>
        <div class="control">
          <button id="all-button">
            <svg
              className="btn-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.71 6.71a.996.996 0 0 0-1.41 0L1.71 11.3a.996.996 0 0 0 0 1.41L6.3 17.3a.996.996 0 1 0 1.41-1.41L3.83 12l3.88-3.88c.38-.39.38-1.03 0-1.41m8.58 0a.996.996 0 0 0 0 1.41L20.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L17.7 6.7c-.38-.38-1.02-.38-1.41.01M8 13c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m4 0c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m4-2c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"
              />
            </svg>
            <span className="btn-text">全部接口</span>
          </button>
          <button id="docs-button">
            <svg
              className="btn-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1m17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 9h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1m-4 4h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1m4-8h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1"
              />
            </svg>
            <span className="btn-text">项目文档</span>
          </button>
        </div>
      </main>
      {html`
        <script>
          document.getElementById("all-button").addEventListener("click", () => {
            window.location.href = "/all";
          });
          document.getElementById("docs-button").addEventListener("click", () => {
            window.open("https://blog.imsyy.top/posts/2024/0408");
          });
        </script>
      `}
    </Layout>
  );
};

export default Home;
