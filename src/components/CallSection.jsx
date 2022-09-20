import React from 'react';
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';

const SERVICE_ID = ""
const TEMPLATE_ID = ""
const PUBLIC_KEY = ""

function CallSection() {
  const form = React.useRef();

  let info = ''

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (e.target.name == 'email') {
      info = e.target.info.value
    } else if (e.target.name == 'number') {
      info = e.target.info.value
    }

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      text: info
    }, PUBLIC_KEY).then((result) => {
        Swal.fire({
          icon: 'success',
          title: 'Сообщение отправлено успешно'
        })
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Произошла ошибка',
          text: error.text,
        })
      });
    e.target.reset()
  };

  return (
    <section className="call" id={"call"}>
        <div className="call-bg">
            <div className="call-content">
                <h3 className="call-title">Оставьте заявку на консультацию</h3>
                <div className="form-block">
                    <form ref={form} onSubmit={handleOnSubmit} name="email">
                      <input type="text" placeholder="Электронная почта" name="info" required/>
                      <button className="form-button" id="email-btn" type="submit" name='user_contact'>Оставить заявку</button>
                    </form>
                    <h3 className="call-title">или</h3>
                    <form ref={form} onSubmit={handleOnSubmit} name="number">
                      <input type="text" placeholder="Номер телефона" name="info" required/>
                      <button className="form-button" id="phone-btn" type="submit" name='user_contact'>Оставить заявку</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CallSection