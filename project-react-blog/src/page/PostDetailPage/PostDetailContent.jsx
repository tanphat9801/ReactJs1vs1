import "./css/post-detail.css"
import "./css/comments.css"
import "./css/post-author.css"
import "./css/related-posts.css"

import Button from "../../shared/Button/Button"

const PostDetailContent = () => {
  return (
    <>
      <div className="post-detail__content">
        <div className="thumbnail">
          <img src="../assets/images/blog-detail.jpg" alt="blog-title" />
        </div>
        <div className="content-padding">
          {/* Post Detail rich text editor */}
          <div className="rte">
            <p>
              Markdown is a lightweight markup language with
              plain-text-formatting syntax. Its design allows it to be converted
              to many output formats, but the original tool by the same name
              only supports HTML. Markdown is often used to format readme files,
              for writing messages in online discussion forums, and to create
              rich text using a plain text editor.
            </p>
            <h2>Emphasis</h2>
            <p>
              Emphasis, aka <i>italics</i>, with asterisks or <u>underscores</u>
              .
            </p>
            <p>
              Strong emphasis, aka bold, with <strong>asterisks</strong> or{" "}
              <strong>underscores</strong>.
            </p>
            <p>
              Strikethrough uses two tildes. <del>Scratch this</del>.
            </p>
            <h2>Code and Syntax Highlighting</h2>
            <p>
              Inline <code>code</code> has <code>back-ticks around</code> it.
            </p>
            <p>
              Blocks of code are either fenced by lines with three back-ticks
              ```, or are indented with four spaces. I recommend only using the
              fenced code blocks — they’re easier and only they support syntax
              highlighting.
            </p>
            <pre>
              <code className="language-javascript">
                var args = []; // Empty array, at first.{"\n"}for (var i = 0; i
                &lt; arguments.length; i++) {"{"}
                {"\n"}
                {"  "}args.push(arguments[i]){"\n"}
                {"}"}  Now 'args' is an array that holds your arguments.{"\n"}
                console.log(args);
              </code>
            </pre>
            <h2>Blockquote</h2>
            <blockquote>
              Blockquotes are very handy in email to emulate reply text. This
              line is part of the same quote.
            </blockquote>
            <h2>List</h2>
            <ol>
              <li>First ordered list item</li>
              <li>
                Another list item
                <ul>
                  <li>Unordered sub-list.</li>
                </ul>
              </li>
              <li>
                Actual numbers don’t matter, just that it’s a number
                <ol>
                  <li>Ordered sub-list</li>
                </ol>
              </li>
            </ol>
          </div>
          {/* End Post Detail rich text editor */}
          {/* Post Detail Tags */}
          <div className="post-detail__tags">
            <h2>Tags</h2>
            <ul>
              <li className="item">
    	          <Button type="default">HTML</Button>
              </li>
              <li className="item">
    	          <Button type="default">HTML</Button>
              </li>
              <li className="item">
    	          <Button type="default">REACT</Button>
              </li>
              <li className="item">
    	          <Button type="default">VUE</Button>
              </li>
            </ul>
          </div>
          {/* End Post Detail Tags */}
          {/* Post Detail Comments */}
          <div className="post-detail__comments">
            <div className="comments__form">
              <div className="comments__form--control">
                <div className="comments__section--avatar">
                  <a href="/">
                    <img src="../../assets/images/avatar1.jpg" alt="" />
                  </a>
                </div>
                <textarea name defaultValue={""} />
              </div>
              <div className="text-right">
                <Button>Submit</Button>
              </div>
            </div>
            <p>20 Comments</p>
            <ul className="comments">
              {/* Comment 1 */}
              <li className="item">
                <div className="comments__section">
                  <div className="comments__section--avatar">
                    <a href="/">
                      <img src="../../assets/images/avatar1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="comments__section--content">
                    <a href="/" className="comments__section--user">
                      John Smith
                    </a>
                    <p className="comments__section--time">2 minutes ago</p>
                    <p className="comments__section--text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nesciunt sequi odit exercitationem maiores, iusto unde
                      quibusdam! Ullam nisi iste reprehenderit, expedita nam ad.
                      Nisi hic at voluptate sint incidunt aut?
                    </p>
                    {/* <i class="ion-reply comments__section--reply"></i> */}
                  </div>
                </div>
                {/* Reply Comments */}
                <ul className="comments">
                  <li className="item">
                    <div className="comments__section">
                      <div className="comments__section--avatar">
                        <a href="/">
                          <img src="../../assets/images/avatar3.jpg" alt="" />
                        </a>
                      </div>
                      <div className="comments__section--content">
                        <a href="/" className="comments__section--user">
                          John Smith
                        </a>
                        <p className="comments__section--time">2 minutes ago</p>
                        <p className="comments__section--text">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit?
                        </p>
                        {/* <i class="ion-reply comments__section--reply"></i> */}
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="comments__section">
                      <div className="comments__section--avatar">
                        <a href="/">
                          <img src="../../assets/images/avatar4.jpg" alt="" />
                        </a>
                      </div>
                      <div className="comments__section--content">
                        <a href="/" className="comments__section--user">
                          John Smith
                        </a>
                        <p className="comments__section--time">2 minutes ago</p>
                        <p className="comments__section--text">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Nesciunt sequi odit exercitationem ma?
                        </p>
                        {/* <i class="ion-reply comments__section--reply"></i> */}
                      </div>
                    </div>
                  </li>
                </ul>
                {/* Reply form */}
                <div className="comments__form">
                  <div className="comments__form--control">
                    <div className="comments__section--avatar">
                      <a href="/">
                        <img src="../../assets/images/avatar1.jpg" alt="" />
                      </a>
                    </div>
                    <textarea name defaultValue={""} />
                  </div>
                  <div className="text-right">
                    <button className="btn btn-default">Submit</button>
                  </div>
                </div>
              </li>
              {/* Comment 2 */}
              <li className="item">
                <div className="comments__section">
                  <div className="comments__section--avatar">
                    <a href="/">
                      <img src="../../assets/images/avatar2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="comments__section--content">
                    <a href="/" className="comments__section--user">
                      John Smith
                    </a>
                    <p className="comments__section--time">2 minutes ago</p>
                    <p className="comments__section--text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nesciunt sequi odit exercitationem maiores?
                    </p>
                    {/* <i class="ion-reply comments__section--reply"></i> */}
                  </div>
                </div>
                <div className="comments__hidden">
                  <a href="/">
                    <i className="icons ion-ios-undo" /> Xem thêm 2 câu trả lời
                  </a>
                </div>
              </li>
              {/* Comment 3 */}
              <li className="item">
                <div className="comments__section">
                  <div className="comments__section--avatar">
                    <a href="/">
                      <img src="../../assets/images/avatar3.jpg" alt="" />
                    </a>
                  </div>
                  <div className="comments__section--content">
                    <a href="/" className="comments__section--user">
                      John Smith
                    </a>
                    <p className="comments__section--time">2 minutes ago</p>
                    <p className="comments__section--text">
                      Lorem ipsum dolor sit, amet?
                    </p>
                    {/* <i class="ion-reply comments__section--reply"></i> */}
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* End Post Detail Comments */}
        </div>
      </div>
    </>
  );
};

export default PostDetailContent;
