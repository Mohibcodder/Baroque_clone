import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function Newform() {
  return (
    <Container fluid>
      {/* Logo */}
      <Row className="justify-content-center py-3 border-bottom">
        <Col xs="auto">
          <img
            src="https://baroque.pk/cdn/shop/files/LOGO_PNG_V01.png?v=1689675712&width=180"
            alt="Logo"
          />
        </Col>
      </Row>

      <Row className="justify-content-center text-start">
        <Col lg={8} md={10} xs={12}>
          <Row>
            {/* Left Side - Form */}
            <Col lg={8} md={7} xs={12} className="pt-5">
              {/* Contact Section */}
              <div className="border-bottom pb-4">
                <h3 className="text-lg font-bold">Contact</h3>
                <Form>
                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group controlId="formCheckbox">
                    <Form.Check type="checkbox" label="Email me with news and offers" />
                  </Form.Group>
                </Form>
              </div>

              {/* International Website Notice */}
              <div className="my-4 bg-light p-3 rounded">
                <p>
                  <strong>International Website</strong>
                  <br />
                  To deliver products outside of Pakistan, visit our International Website:
                  <a href="https://baroque.com.pk" target="_blank" rel="noreferrer">
                    https://baroque.com.pk
                  </a>
                </p>
              </div>

              {/* Delivery Section */}
              <div className="mb-5">
                <h3 className="text-lg font-bold">Delivery</h3>
                <Form>
                  <Form.Group controlId="formCountry" className="mb-3">
                    <Form.Control as="select">
                      <option>Pakistan</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="formFirstLastName" className="mb-3">
                    <Row>
                      <Col md={6}>
                        <Form.Control type="text" placeholder="First name" />
                      </Col>
                      <Col md={6}>
                        <Form.Control type="text" placeholder="Last name" />
                      </Col>
                    </Row>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Address" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Apartment, suite, etc. (optional)"
                    />
                  </Form.Group>

                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Control type="text" placeholder="City" />
                    </Col>
                    <Col md={6}>
                      <Form.Control type="text" placeholder="Postal code (optional)" />
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Phone" />
                  </Form.Group>

                  <Form.Group controlId="formSaveInfo">
                    <Form.Check type="checkbox" label="Save this information for next time" />
                  </Form.Group>
                </Form>
              </div>

              {/* City Selection */}
              <div className="mb-4">
                <Form.Group>
                  <Form.Label className="font-semibold">Select your city</Form.Label>
                  <Form.Select>
                    <option>Select a city</option>
                    <option>Lahore</option>
                    <option>Karachi</option>
                    <option>Islamabad</option>
                  </Form.Select>
                </Form.Group>
              </div>

              {/* Shipping Method */}
              <div className="mb-4">
                <Form.Group>
                  <Form.Label className="font-semibold">Shipping method</Form.Label>
                  <div className="border p-3 rounded">
                    <div className="d-flex justify-content-between">
                      <p className="mb-0">Local Delivery</p>
                      <p className="mb-0 font-weight-bold">FREE</p>
                    </div>
                  </div>
                </Form.Group>
              </div>

              {/* Payment Section */}
              <div className="mb-4">
                <h5 className="font-semibold">Payment</h5>
                <p className="text-muted">All transactions are secure and encrypted.</p>
                <div className="border p-3 mb-3 rounded">
                  <Form.Check
                    type="radio"
                    label="Cash on Delivery (COD)"
                    name="paymentMethod"
                  />
                </div>
                <div className="border p-3 rounded">
                  <Form.Check
                    type="radio"
                    label="Safepay Checkout - pay with debit & credit cards"
                    name="paymentMethod"
                  />
                  <div className="d-flex mt-2">
                    <img
                      src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/netbanking.C9e9yzjv.svg"
                      alt="Net Banking"
                      className="mr-2"
                      width="40"
                    />
                    <img
                      src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/visa.sxIq5Dot.svg"
                      alt="Visa"
                      className="mr-2"
                      width="40"
                    />
                    <img
                      src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/master.CzeoQWmc.svg"
                      alt="Mastercard"
                      width="40"
                    />
                  </div>
                </div>
              </div>

              {/* Billing Address */}
              <div className="mb-4">
                <h5 className="font-semibold">Billing address</h5>
                <div className="border p-3 mb-3 rounded">
                  <Form.Check
                    type="radio"
                    label="Same as shipping address"
                    name="billingAddress"
                    required
                  />
                </div>
                <div className="border p-3 rounded">
                  <Form.Check
                    type="radio"
                    label="Use a different billing address"
                    name="billingAddress"
                    required
                  />
                </div>
              </div>

              {/* Complete Order Button */}
             <Button type="submit" className="w-100 btn-dark">
                Complete order
              </Button>

              {/* Footer Links */}
              <div className="text-center mt-4">
                <a href="#" className="text-muted mx-2">Refund policy</a>
                <a href="#" className="text-muted mx-2">Shipping policy</a>
                <a href="#" className="text-muted mx-2">Privacy policy</a>
                <a href="#" className="text-muted mx-2">Terms of service</a>
                <a href="#" className="text-muted mx-2">Contact information</a>
              </div>
            </Col>

            {/* Right Side - Cart Summary */}
            <Col lg={4} md={5} xs={12} className="sticky-top h-100">
              <Card className="p-4 shadow-sm">
                {/* Product 1 */}
                <div className="d-flex justify-content-between mb-3">
                  <div className="d-flex">
                    <img
                      src="https://cdn.shopify.com/s/files/1/2277/5269/products/38_19_64x64.jpg?v=1693402721"
                      alt="Product 1"
                      className="mr-3"
                      width="50"
                    />
                    <p className="mb-0">EMBROIDERED VELVET SHAWL VS-33</p>
                  </div>
                  <p>Rs 59,970.00</p>
                </div>

                {/* Product 2 */}
                <div className="d-flex justify-content-between mb-3">
                  <div className="d-flex">
                    <img
                      src="https://cdn.shopify.com/s/files/1/2277/5269/products/48_15_64x64.jpg?v=1693402740"
                      alt="Product 2"
                      className="mr-3"
                      width="50"
                    />
                    <p className="mb-0">EMBROIDERED VELVET SHAWL VS-32</p>
                  </div>
                  <p>Rs 39,980.00</p>
                </div>

                {/* Product 3 */}
                <div className="d-flex justify-content-between mb-3">
                  <div className="d-flex">
                    <img
                      src="https://cdn.shopify.com/s/files/1/2277/5269/files/21_54d03c3c-1277-43da-bd84-e9decf0d19be_64x64.jpg?v=1725624149"
                      alt="Product 3"
                      className="mr-3"
                      width="50"
                    />
                    <p className="mb-0">EMBROIDERED PRINTED LAWN UF-711</p>
                  </div>
                  <p>Rs 8,990.00</p>
                </div>

                {/* Discount Code Section */}
                <Form.Group controlId="formDiscount" className="d-flex my-3">
                  <Form.Control
                    type="text"
                    placeholder="Discount code or gift card"
                  />
                  <Button variant="outline-secondary" className="ml-2">
                    Apply
                  </Button>
                </Form.Group>

                {/* Subtotal */}
                <div className="d-flex justify-content-between">
                  <p>Subtotal (6 items)</p>
                  <p>Rs 108,940.00</p>
                </div>

                {/* Shipping */}
                <div className="d-flex justify-content-between">
                  <p>Shipping</p>
                  <p>FREE</p>
                </div>

                {/* Total */}
                <div className="d-flex justify-content-between font-weight-bold border-top pt-3">
                  <p>Total</p>
                  <p>Rs 108,940.00</p>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Newform;
