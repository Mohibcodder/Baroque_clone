import Header from "./Header"
import Footer from "./Footer";
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function ExchangeForm() {
  return (
    <>   
    <Header/>

    
        <h1 className="font-bold text-4xl pt-20 relative right-10 flex justify-center font">EXHANGE FORM
        </h1>
     <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg  m-32 border-4">
      <Form>
       
        <div className="flex justify-between gap-6 mb-4">
          <Form.Group className="w-1/2">
            <Form.Label className="font-bold">ORDER NO. *</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Order Number"
              className="border-gray-300 rounded-md"
            />
          </Form.Group>
          <Form.Group className="w-1/2">
            <Form.Label>Email *</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Email"
              className="border-gray-300 rounded-md"
            />
          </Form.Group>
        </div>

        {/* Upload Image */}
        <Form.Group controlId="formFile" className="mb-4">
          <Form.Label className="font-bold">UPLOAD IMAGE</Form.Label>
          <p className="text-xs text-gray-500">The max file size is 50MB.</p>
          <Form.Control 
            type="file"
            className="border-gray-300 rounded-md"
          />
        </Form.Group>

        {/* Reason for Exchange */}
        <Form.Group className="mb-4">
          <Form.Label className="font-bold">REASON OF EXCHANGE *</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3}
            placeholder="Reason"
            className="border-gray-300 rounded-md"
          />
        </Form.Group>

        {/* Desired Article in Exchange */}
        <Form.Group className="mb-4">
          <Form.Label className="font-bold">DESIRED ARTICLE IN EXCHANGE *</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Desired Article"
            className="border-gray-300 rounded-md"
          />
        </Form.Group>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button variant="secondary" type="submit" className="w-full py-2">
            Submit
          </Button>
        </div>
      </Form>

      {/* Disclaimer Text */}
      <div className="mt-4 text-lg text-gray-500">
        <p>* Rs.500 COD will be applicable on exchange orders excluding faulty article.</p>
        <p>* Exchange is not applicable on orders placed on sale.</p>
        <p>* Only credit voucher will be provided in return.</p>
        <p>* Exchange policy is only liable within 10 days after the goods are delivered.</p>
        <p>* To know more, please check our exchange policy 
        <Link to="/Exchangerefund" href="#" className="text-blue-500">(Click Here)</Link>.</p>
      </div>
    </div>
    <Footer/>
    </>

  );
}

export default ExchangeForm;
