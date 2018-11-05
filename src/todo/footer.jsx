import '../assets/style/footer.styl'

export default {
    data (){
        return{
            author: 'liufan'
        }
    },

    render(){
        return(
            <div id="footer">
                <span> Weitten by {this.author} </span>
            </div>
        )
    }
}