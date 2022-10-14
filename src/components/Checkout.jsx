import React from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const navigate = useNavigate();
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    shippingAddress1: '',

    touched: {
      email: false,
      password: false,
      shippingAddress1: false,
    },
  });

  const errors = {
    name: form.name.length === 0,
    email: form.email.length === 0,
    shippingAddress1: form.shippingAddress1.length === 0,
  };
  const disabled = Object.keys(errors).some((x) => errors[x]);

  const handleChange = (ev) => {
    const { name, value } = ev.target;

    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleBlur = (ev) => {
    const { name } = ev.target;
    setForm((prevState) => {
      return {
        ...prevState,
        touched: { ...form.touched, [name]: true },
      };
    });
  };

  const handleSubmit = (ev) => {
    if (disabled) {
      ev.preventDefault();
      return;
    }
    navigate('/orderconfirmation');
  };

  const showError = (field) => (errors[field] ? form.touched[field] : false);

  return (
    <form onSubmit={handleSubmit}>
      <div className='checkout-container'>
        {/* Row 1 */}
        <h2>Shopping Checkout</h2>

        {/* Row 4 */}
        <div className='checkout-header'>
          <h4>Your Details</h4>
        </div>

        {/* Row 5 */}
        <hr />

        {/* Row 6 */}
        <div className='checkout-table'>
          <label>Name</label>
          <input
            type='text'
            name='name'
            invalid={showError('name')}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Enter name'
          />
          <label>Email</label>
          <input
            type='text'
            name='email'
            invalid={showError('email')}
            onChange={handleChange}
            placeholder='Enter email'
          />
        </div>

        {/* Row 7 */}
        <div className='checkout-header'>
          <h4>Address Details</h4>
        </div>

        {/* Row 8 */}
        <hr />

        {/* Row 9 */}
        <div className='checkout-table'>
          <label>Copy to shipping</label>
          <input type='checkbox' />

          <label>Billing Address</label>

          <div className='checkout-adress'>
            <input type='text' name='billingAddress1' />
            <input type='text' name='billingAddress2' />
            <input type='text' name='billingCity' />
          </div>

          <label>Shipping Address</label>

          <div className='checkout-adress'>
            <input
              type='text'
              name='shippingAddress1'
              invalid={showError('shippingAddress1')}
              placeholder='Enter first address line'
            />
            <input type='text' name='shippingAddress2' />
            <input type='text' name='shippingCity' />
          </div>
        </div>

        <button className='checkout-cancel' onClick={() => navigate('/basket')}>
          Cancel
        </button>

        <button
          className='checkout-confirmed'
          onClick={() => navigate('/orderconfirmation')}
        >
          Confirm Order
        </button>
      </div>
    </form>
  );
}

export default Checkout;
