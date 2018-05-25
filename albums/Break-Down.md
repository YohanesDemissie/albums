# learn-react-native
import { Text } from 'react-native // this is an example of destructured import to import "text" directly out of the library

#App Registry
only used for the head componenet not for the child components

############# Console Log (DEBUG) ###################
Command D ion the simulator will pop up a list of extension tools on the moile screen
debug; breaks code execution to test code like console log but more space efficient


#Display
All text are, by default, placed at top left corner of screen and is repositioned and styled using "styles" component nested within its

#Styling
<Text style={textStyle}>Albums</Text>
the curly brackets are "properties"

all styling methods are camel case instead of hyphenated like CSS
there are no measurement formats like px, em, etc. All one universal unit, pre-declared by ReactNative/JSX

thumbnail_Images must be set to size that fits within its card to actually render to the DOM

height: 300, //this is an optional number. can be any height
    flex: 1,
    width: null

ScrollView "PArt of the react-native library necessary to scroll through content, used as an lement <ScrollView>{props.albums} </ScrollView>

in **index.js the parent tag in JSX must have style {{ flex: 1}} for component to be fully accessible and responsive through scroll view

</TouchableOpacity>
user feedback on clicked links, picture, etc. that redirect the application


#Justify Content
great way to re arrange content within a flex-box

#View
Allows us to wrap styling around our text

#Dynamic Properties (Section 6: Lesson 28)
passing in "props" in component allows us to dynamically display property values depending on which component the user is interfacing with 

#Functional Components
A function that renders coponents using JSX
Used for static data
easier/simple

Example: 
const Header = (props) => { //setting header property
    return <Text style={textStyle}>{props.headerText}</Text>
                    OR
    return <Text> Hello There!</Text>
    )
  }

#Class Components
Used for dynamic data rendering components
uses state and properties
more complex but useful!

Example: 
class Header extends Component {
  render () {
    return <Text style={textStyle}>{props.headerText}</Text>
                    OR
    return <Text> Hello There!</Text>
  }
}


#Axios
used to fetch 'GET' asynchronous request data for HTTP request
npm install --save axios

#Properties
Dynamically rendered header text using react library tools for properties and display

#State
Dynamically rendering content to the DOM based on UI and event listeners like "component will mount"