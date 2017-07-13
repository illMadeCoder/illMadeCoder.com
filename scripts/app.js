function create_field_prop(title,content) {
  return ({title:title,content:content})
}

//Component -- Body
const Body = (props) => {
  let TitleText = "A Curious Domain"
  let SubtitleText = "Jesse Bergerstock"
  let fields = []
  fields.push(create_field_prop(
    "Web",
    (
      <div className="row row-image-illmadecoder">
        <p className="row-text">illMadeCoder.com</p>
      </div>
    )
  ))
  fields.push(create_field_prop(
    "Self",
    (
      <div>
        <p><span style="font-weight: 400;">Welcome Friend - to my sincere but abstract abode! Here lies the product of my labor, from my public web work, to my inner mind in regards to the art of code and games and self.</span></p>
        <p><span style="font-weight: 400;">For what reason do you honor me with such a visit? Perhaps you&rsquo;re an employer evaluating my records to see if I fit the bill, if so, a resume can be found here -- <a href="https://docs.google.com/document/d/1jaCLcXY3yasWrpdZChLeg0nNL5q6EyE421fZdmRwugs/edit?usp=sharing">resume</a>, or perhaps a guest who has come across my works and would like to see more. Either way, you&rsquo;re what makes this all matter, and I hope you find something of interest in your exploration of my domain.</span></p>
        <p><span style="font-weight: 400;">A bit about me.</span></p>
        <p><span style="font-weight: 400;">My given name is Jesse Bergerstock, and in the virtual worlds I go by illMadeCoder (Ill Made Coder). For like the Ill-Made Knight of Arthurian Legend, I value high expectations, but to never forget my humbling nature as man. In this way, my journey is of self growth and sincerity, I see no meaning in a life as a shadow of oneself; I find this role to be my greatest strength and greatest weakness. I live for the discovery and interaction with truths.</span></p>
        <p><span style="font-weight: 400;">But let&rsquo;s back up, so what do I do?</span></p>
        <p><span style="font-weight: 400;">First I learn and model, second I create, third I appreciate. That doesn&rsquo;t say all that much, but that&rsquo;s what I do. Usually this takes form in the the study of self, maths, music, competition, astronomy, games, automation (programming), and ... well you get the point. But if you&rsquo;re here, you&rsquo;re likely here for my programmatic works, so then may I lean your vision towards the top left to see my web work, or perhaps below where some of my ideas on games or coding can be found, or finally, the top right to see everything else. If you find anything interesting, I&rsquo;d love to know; you can always send me an email at </span><a href="mailto:illMadeCoder@gmail.com"><span style="font-weight: 400;">illMadeCoder@gmail.com</span></a><span style="font-weight: 400;"> !</span></p>
        <p><span style="font-weight: 400;">There&rsquo;s so much more to say, but I must limit myself somewhere, so instead you&rsquo;ll have to discovery the rest through my work, or you can always drop me a message, but be warned - I&rsquo;ll never shutup once you do.</span></p>
        <p><span style="font-weight: 400;">Please, enjoy your stay friend.</span></p>
        <div class="articles">
          <span style="font-size:32px;">A Suspicious Lot of Ideas</span>
          <span style="font-size:16px;">(Essays and Blurbs)</span>
          <ul style="list-style-type:none">
            <li>
              General Programming
              <ul>
                <li>
                  <a className="article-link" href=""> Programming Paradigms 101 (WIP) </a>
                </li>
              </ul>
            </li>
            <li>
              Web Development
              <ul>
              </ul>
            </li>
            <li>
              Game Design
              <ul>
                <li>
                  <a className="article-link" href=""> Mechanics, Polish, and Metaphor - A Theory of Games (WIP) </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>  
    )
  ))
  fields.push(create_field_prop("Work",
    (
      <div class="row">
        <div class="row-text">Project Title</div>
      </div>
    )
  ))
  const $title = <Title text={TitleText}/>
  const $subtitle = <Subtitle text={SubtitleText}/>
  const $fields = <Fields fields={fields}/>
  const $headers = <Headers $fields={fields}/>
  return (
    <div>
      {$title}
      {$subtitle}
      {$headers}
      {$fields}
    </div>
  )
}
//Component -- Title
const Title = (props) => (<p className="title">{props.text}</p>)
//Component -- Subtitle
const Subtitle = (props) => (<p className="subtitle">{props.text}</p>)
//Componet -- Headers
const Headers = (props) => {
  //props contains a $fields property for each field to generate a header for.
  let $headers = props.$fields.map(($f) => (<Header key={$f.title} $field={$f.title}/>))
  return (
    <div className="headers">
      {$headers}
    </div>
  )
}
//Component -- Header
class Header extends React.Component {
  constructor(props) {
    //Expects props.$field
    super(props)
    let $field = props.$field
    this.state = {title:$field}
  }
  handleClick(e) {
    console.log(this)
  }
  render() {
    let props = this.state
    return (<div onClick={this.handleClick.bind(this)} className={"header " + props.title.toLowerCase()}>{props.title}</div>)
  }
}
//Component -- Fields
const Fields = (props) => {
  let $fields = props.fields.map((f) => (<Field key={f.title} title={f.title} content={f.content}/>))
  return (
    <div style={{display:'none'}} className="fields">
      {$fields}
    </div>
  )
}
//Component -- Field
const Field = (props) => {
  const $fieldTitle = <FieldTitle title={props.title}/>
  const $fieldQuote = <FieldQuote />
  const $fieldContent = props.content
  return (
    <div className={"field-" + props.title.toLowerCase()}>
      {$fieldTitle}
      {$fieldQuote}
    </div>
  )
}
//Component -- FieldTitle
const FieldTitle = (props) => (<p className="fieldtitle">{props.title}</p>)
//Component -- FieldQuote
const FieldQuote = (props) => (<p className="fieldquote"></p>)
//Component -- ArticleList
const ArticleList = (props) => {
  let articles = props.articles.map((a) => (<Article Key=a.hyperlink hyperlink=a.hyperlink a.title/>))
  return (
    <ul className="articles">
      <span style="font-size:32px;">A Suspicious Lot of Ideas</span>
      <span style="font-size:16px;">(Essays and Blurbs)</span>
      {articles}
    </ul>
)}
//Component -- Article
//Expects props.hyperlink, props.title
const Article = (props) => (<li><a className="article-link" hrefs={props.hyperlink}>{props.title}</a></li>)
//Component -- RichTextBlock

//Component -- Projects

//Component -- ProjectCard

//ReactDOM.render(<Body />,document.getElementById('root'));
