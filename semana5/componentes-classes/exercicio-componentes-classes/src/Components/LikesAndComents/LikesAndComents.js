import React from 'react'
import './LikesAndComents.css'

class LikesAndComents extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            botaoComent: false,            
            contagemComent: 0,
            contagemLike: 0,           

        }
    }

        aoChecar = (event) => {
            if(event.target.checked){
                this.setState({                    
                    contagemLike: this.state.contagemLike + 1
                })
            }else{
                this.setState({
                    contagemLike: this.state.contagemLike - 1
                    
                })
            }
        }

        clicarNoComentario = () => {
            if(this.state.botaoComent){
                this.setState({
                    botaoComent: false
                    

                })
            }else{
                this.setState({
                    botaoComent: true
                })
            }
        }

        retornaInputComentario = () => {
            if(this.state.botaoComent){
                return(
                    <div>
                        <input type="text"></input>
                        <button onClick={""}></button>
                    </div>
                )
            }else{
                return
            }
        }

    

    render(){
        return(
            <div className="inputs">
                <input type="checkbox" onChange={this.aoChecar} />
                <p>Likes:{this.state.contagemLike}</p>
                <button onClick={this.clicarNoComentario} />                
                <p>Coments:{this.state.contagemComent}</p>                              
                {this.retornaInputComentario()}               
                
            </div>
        )
    }
}

export default LikesAndComents