const forms = () => {
    console.log('forms');
    const form = document.querySelectorAll('form'),
          input = document.querySelectorAll('input'),
          message = {
              loading: 'Loading...', 
              succes: "Спасибоо! мы с вами свяжемся",
              fail: 'Something went wrong...'
          },
          phoneInputs = document.querySelectorAll('input[name="user_phone"]');

        phoneInputs.forEach( item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/\D/, '');
            });
        });
        
          const postData = async (url, data) => {
              console.log('data posted');
              document.querySelector('.status').textContent = message.loading;
              let res = await fetch(url, {
                  method: 'POST',
                  body: data
              });

              return await res.text();

          };

          const clearInputs = () => {
              input.forEach( item => {
                  item.value = '';              
                });
          };

          form.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();

                let statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                item.appendChild(statusMessage);

                const formData = new FormData(item);

                postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.succes;
                })
                .catch(() => statusMessage.textContent = message.fail )
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);
                });
            });
          });

};

export default forms;