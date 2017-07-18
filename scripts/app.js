const data = {
  quotes : 
  [
    '"The bravest people are the ones who don\'t mind looking like cowards - T.H. White"',
    '"Everything not forbidden is compulsory - T.H. White"', 
    '"You and I are all as much continuous with the physical universe as a wave is continuous with the ocean. - Alan W. Watts"', 
    '"Laugh often, long and loud. Laugh until you gasp for breath. - George Carlin"', 
    '"My view is that if your philosophy is not unsettled daily then you are blind to all the universe has to offer. - Neil deGrasse Tyson"',
    '"Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another. - Carl Sagan"',
    '"If you wish to make an apple pie from scratch, you must first invent the universe. - Carl Sagan"'

  ],
  title : "A Curious Domain",
  subtitle : "Jesse Bergerstock",
  fields : [],
  articles : []
}
function create_field_prop(title,content) {
  return ({title:title,content:content})
}


//Component -- Body
//Expects a props.title as a string, props.subtitle as a string, props.quotes as an array of strings, props.fields as an array of field objects
const Body = (props) => {
  let titleText = props.title
  let subtitleText = props.subtitle
  let fields = []
  let quotes = props.quotes
  
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
        <h2 style={{textAlign:"center"}}> A Bit On Myself </h2>
        <RichTextBlock> Welcome Friend - to my sincere but abstract abode! <br /><br />
        
        Here lies the product of my labor, from my public web work and projects, to my inner mind in regards to the art of code and games and self.

    For what reason do you honor me with such a visit? Perhaps you’re an employer evaluating my records to see if I fit the bill, if so, a resume can be found here -- resume, or perhaps a guest who has come across my works and would like to see more. Either way, you’re what makes this all matter, and I hope you find something of interest in your exploration of my domain. 

    A bit about me.

    My name is Jesse Bergerstock, and in the virtual worlds I go by illMadeCoder (Ill Made Coder). For like the Ill-Made Knight of Arthurian Legend, I value high expectations, but to never forget my humbling nature as man. In this way, my journey is of self growth and sincerity, I see no meaning in a life as a shadow of oneself; I find this role to be my greatest strength and greatest weakness. I live for the discovery and interaction with truths.

    <br /> <br /> But let’s back up, so what do I do?

    First I learn and model, second I create, third I appreciate. That doesn’t say all that much, but that’s what I do. Usually this takes form in the the study of self, maths, music, competition, astronomy, games, automation (programming), and ... well you get the point. But if you’re here, you’re likely here for my programmatic works, so then may I lean your vision towards the top left to see my web work, or perhaps below where some of my ideas on games or coding can be found, or finally, the top right to see everything else. If you find anything interesting, I’d love to know; you can always send me an email at illMadeCoder@gmail.com !

    There’s so much more to say, but I must limit myself somewhere, so instead you’ll have to discovery the rest through my work, or you can always drop me a message, but be warned - I’ll never shutup once you do.

    <br /> <br /> Please, enjoy your visit. </RichTextBlock>
    
      <ArticleList articles={[
        {hyperlink:"https://docs.google.com/document/d/1R08WKjbiuwCTc6XB6M21Fo1QO2VWbBEQZOmht5KnZ7E/edit?usp=sharing", title:"Pre and Post Conditions - Keywords of the Trade"},
        {hyperlink:"https://docs.google.com/document/d/1Wg_xiU6fYmG55pzNy757uKc7Z71w3eV7O8hmjso89Ok/edit?usp=sharing", title:"Semantics vs Syntax - Keywords of the Trade"},
        {hyperlink:"https://docs.google.com/document/d/1KbxUFzkLsESpKyZIr53KY6_rqPV4-4ySYsn7z8bQZT4/edit?usp=sharing", title:"Program Cohesion - Keywords of the Trade"}

      ]} />
    </div>
    )
  ))
  fields.push(create_field_prop("Work",
    (
      <div className="row">
        <div className="row-text">Project Title</div>
      </div>
    )
  ))
  const $titleBlock = <TitleBlock title={titleText} subtitle={subtitleText}/>
  const $view = <View fields={fields} quotes={quotes}/>
  return (
    <div>
      {$titleBlock}
      {$view}
    </div>
  )
}
//Component -- TitleBlock
//Expects props.title as <string>, props.subtitle as <string>
const TitleBlock = (props) => {
  console.log(props)
  //Component -- Title
  const Title = (props) => (<p className="title">{props.text}</p>)
  //Component -- Subtitle
  const Subtitle = (props) => (<p className="subtitle">{props.text}</p>)
  return (
    <div> 
      <Title text={props.title}/>
      <Subtitle text={props.subtitle}/>
    </div>
  )
}
//Component (class) -- View
//Expects props.fields as an array of objects of type [{title:<string>,content:<React Element>}] and props.quotes, an array of strings
class View extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fields:props.fields,
      active_field:null,
    }
    this.handleViewChange = this.handleViewChange.bind(this)
  }
  handleViewChange(active_field) {
    this.setState({active_field:active_field})
  }
  render() {
    const $headers = <Headers handleClick={this.handleViewChange} titles={this.state.fields.map((f) => (f.title))} active_field={this.state.active_field} />
    const $field = this.state.active_field == null ? null : <Field title={this.state.active_field} content={this.props.fields.filter((f) => (f.title == this.state.active_field))[0].content} quotes={this.props.quotes}/>
    return (
      <div className="view">
        {$headers}
        {$field}
      </div>
    )
  }
}

//Componet -- Headers
//Expects props.handleClick as a callback, props.titles as an array of strings, and props.active_field as a nullable string 
const Headers = (props) => {
  const $headers = props.titles.map((f) => (<Header key={f} title={f} active={f == props.active_field} handleClick={props.handleClick}/>))
  return (
    <div className="headers">
      {$headers}
    </div>
  )
}
//Component -- Header
//Expects props.title as string, props.handleClick as callback, props.active as boolean
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    this.props.handleClick(e.target.textContent)
  }
  render() {
    return (<div onClick={this.handleClick} className={"header " + this.props.title.toLowerCase()}>{this.props.title}</div>)
  }
}
//Component -- Field
//expects a props.title as a string, props.content as a React Element, and props.quotes as an array of strings.
const Field = (props) => {
  //Component -- FieldTitle
  //expects props.title
  const FieldTitle = (props) => (<p className="fieldtitle">{props.title}</p>)
  //Component -- FieldQuote
  //Expects props.quotes
  const FieldQuote = (props) => (<p className="fieldquote">{props.quotes[Math.floor(Math.random() * props.quotes.length)]}</p>)
  const $fieldTitle = <FieldTitle title={props.title}/>
  const $fieldQuote = <FieldQuote quotes={props.quotes}/>
  const $fieldContent = props.content
  return (
    <div className={"field"}>
      {$fieldTitle}
      {$fieldQuote}
      {$fieldContent}
    </div>
  )
}

//Component -- ArticleList
//Expects prop.articles as an array of objects of type {hyperlink:string title:string}
const ArticleList = (props) => {
  //Component -- Article
  //Expects props.hyperlink, props.title
  const $articles = props.articles.map((a) => (<li key={a.title}><a className="article-link" href={a.hyperlink}>{a.title}</a></li>))
  return (
    <div className="articles">
      A Suspicious Lot of Ideas
      (Essays and Blurbs)
      <ul>
        {$articles}
      </ul>
    </div>
  )
}

//Component -- RichTextBlock
const RichTextBlock = (props) => {
  return (<div className="rich-text-block">{props.children}</div>)
}
//Component -- Projects

//Component -- ProjectCard

ReactDOM.render(<Body title={data.title} subtitle={data.subtitle} quotes={data.quotes} fields={data.fields}/>,document.getElementById('root'));
