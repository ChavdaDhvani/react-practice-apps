function printHello(){
   // event.preventDefault();
    console.log('Hello Dhvani');
}


export default function Button(){
    return (
       <form onSubmit={printHello}>
        <input placeholder="write"></input>
        <button>Submit</button>
       </form>
    );
}