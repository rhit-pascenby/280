document.getElementById('fetchData').addEventListener('click', function(){
    let cat = 'music';

   
    fetch(`https://api.chucknorris.io/jokes/random?category=${cat}`, 
{
  method: 'GET',
  headers: {'key' : 'value'}
 }
  )
   .then(response => response.json())
   .then(data => {
    document.getElementById('dataContainer').innerHTML =`
    <p><strong>Title:</strong> ${data.value}</p>
    <p><strong>ID:</strong> ${data.quote}</p>
    <p><strong>Completed:</strong> ${data.completed}</p>`;
})
.catch(error =>{
    console.error("There was an error fetching data:", error);
}); 
    
   
});