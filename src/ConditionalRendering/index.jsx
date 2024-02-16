import  { Component } from 'react'
import HomePage from './HomePage'
import LogInPage from './LogInPage'

export default class ConditionalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        const { isLoggedIn } = this.state
        // 1 way of conditional rendering (using if-else)---
        // if (this.state.isLoggedIn) {
        //     return <HomePage></HomePage>
        // }
        // else {
        //     return <LogInPage></LogInPage>
        // }
        // -------------------------------

        // 2 or second way of conditional rendering (using element variable)---
        // let element;
        // if(isLoggedIn){
        //     element = <HomePage></HomePage>
        // }
        // else{
        //     element = <LogInPage></LogInPage>
        // }
        // return (
        //     <div>
        //         {element}
        //     </div>
        // )
        // --------------------------------------

        // 3 or third way of conditional rendering (using ternary operator)---
        // return (isLoggedIn ? <HomePage></HomePage> : <LogInPage></LogInPage>)
        //    --------------------------------------------
        
        // 4 or forth way of conditional rendering (using ternary operator)---
        let element;
        element = isLoggedIn ? <HomePage></HomePage> : <LogInPage></LogInPage>
        return (
            <div>
                {element}
            </div>
        )
    }
}
