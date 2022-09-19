import './Contacts.css'
import phone from './phone.svg'
import email from './email.svg'
import location from './location.svg'

function Contacts () {
 
    return (
        <div className='container'>
           
            <div className='box'>
                <h1 id='one'>Contact Informations</h1>
                <h2 id="two">Alguma informação adicional</h2>

                <img src={phone} id="phone"></img><p className='info'>(81) 99746-6054</p> 
                <img src={email} id="email"></img><p className='info'>lauraluna.siqueira@hotmail.com</p>
                <img src={location} id="location"></img><p className='info'>Recife, PE</p>
                <button id='insta'>Insta</button>
                <button>Face</button>
                <button>Behance</button>
            </div>
            
            <div className='containerbox'>
            
            
                <label>First Name</label>
                <br></br>
                <input type="text" className='seila'></input>
            
                <label className='teste'>Last Name</label>
                <br></br>
                <input type="text" id='2'></input>


                <label>Email</label>
                <br></br>
                <input type="text" id='3'></input>


                <label>Fone</label>
                <br></br>
                <input type="text" id='4'></input>
            

                <p>What the of Website do you need?</p>
                <p><input type="checkbox"></input>Web Design</p>
                <p><input type="checkbox"></input>Logo Design</p>
                <p><input type="checkbox"></input>Others</p>

                <p>Message</p>
                <input type="text"></input>

                <br></br>

                <button className='btnsend'>Send</button>

                

            </div>


            </div>
    
    )
}
export default Contacts;