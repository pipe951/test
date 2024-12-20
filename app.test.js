beforeEach(() => {
  // สร้าง HTML สำหรับการทดสอบ
  document.body.innerHTML = `
    <div>
      <button id="checkoutButton">Checkout</button>
    </div>
  `;

  // ค้นหาปุ่ม checkoutButton
  const checkoutButton = document.getElementById('checkoutButton');
  
  // ตรวจสอบว่า checkoutButton ถูกสร้างขึ้น
  if (!checkoutButton) {
    throw new Error("Checkout button is not in the DOM.");
  }

  // สร้าง event listener สำหรับปุ่ม checkoutButton
  checkoutButton.addEventListener("click", function() {
    fetch('http://127.0.0.1:3000/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cart })  // ส่งข้อมูลรถเข็นเป็น array ที่เราจำลอง
    })
    .then((response) => response.json())
    .then((data) => {
      const stripe = Stripe('pk_test_51QLRDULXE6bgMjnAORtQGcif8tr8KYrFSyybsGtU6R8DNbt93AEOKOgdmEdvMrWXyJeSNRpkqXof8qaSeOjzwOru00eQdAqNEm');
      return stripe.redirectToCheckout({ sessionId: data.id });
    })
    .then((result) => {
      if (result.error) {
        alert(result.error.message);
      }
    })
    .catch((error) => console.error('Error:', error));
  });
});
