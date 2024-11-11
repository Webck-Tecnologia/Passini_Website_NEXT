import Blog from "./Blog"
import Link from "next/link"

const BlogPage = () => {
    return (
        <div className="blog-section-six position-relative zn2 pt-150 pb-200 lg-pt-90 lg-pb-100">
        <div className="container">
          <div className="position-relative">
            <div className="title-style-five text-center text-sm-start mb-30 lg-mb-10">
              <h2 className="main-title fw-500 tx-dark">Posts recentes</h2>
            </div>
            {/* /.title-style-five */}

            <div className="row gx-xxl-5">
              <Blog />
            </div>
            {/* End .row */}

            <div className="btn-holder text-center">
              <div className="btn-eighteen position-relative d-inline-block tx-dark">
                <Link href="/blog" className="fw-500 tran3s">
                  Confira todos os posts <i className="fa-solid fa-angle-right" />
                </Link>
              </div>
            </div>
            {/* End btn-holder */}
          </div>
        </div>
      </div>
    )
}

export default BlogPage
