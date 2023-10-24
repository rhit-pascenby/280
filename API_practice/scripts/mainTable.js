document.addEventListener('DOMContentLoaded', (event) => {
  
    const fetchDataButton = document.getElementById("fetchDataButton");
    const dataIndexInput = document.getElementById("dataIndexInput");
    const dataTableHead = document.querySelector("#dataTable thead tr");
    const dataTableBody = document.querySelector("#dataTable tbody tr");


    fetchDataButton.addEventListener("click", async function() {
        const dataIndex=dataIndexInput.value;
        if (dataIndex){
            var response = await fetch(`https://jsonplaceholder.typicode.com/todos/${dataIndex}`)
            var data = await response.json()
        
                dataTableHead.innerHTML = '';
                dataTableBody.innerHTML = '';

                for (const key in data){
                    dataTableHead.insertAdjacentHTML('beforeend', `<th>${key}</th>`);
                    dataTableBody.insertAdjacentHTML('beforeend', `<th>${data[key]}</th>`)
                }
                // Close the modal
                $("#dataIndexModal").modal('hide');
            
            // .catch(error => {
            //     console.error("Error fetching data: ", error);
            //     dataTableBody.innerHTML = `<td colspan="2">Error fetching data. Please try again.</td>`
            // })

            // .finally(() =>{
                //Ensure modal and its backdrop are dismissed
                
                $("#dataIndexModal").modal('hide');
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
        }
        
    });

});