import React from 'react'
import { Card, Button } from 'react-bootstrap'


const Entertainment
 = () => {
  return (
    <div>
       <h5 className="border-start border-3 border-danger ps-2 mb-3">Entertainment
</h5>
          <Card className="text-white mb-3">
                     <Card.Img src="/images/photo2.jpg" alt="Vaibhavi Joshi" />
            <Card.ImgOverlay className="bg-dark bg-opacity-50 d-flex flex-column justify-content-end">
              <Button size="sm"  className="mb-2 button-layouts">
                Entertainment

              </Button>
              <Card.Title className="fw-bold">
                Is Tamanna Bhatia hot? | Tamanna Bhatia Entertainment

              </Card.Title>
              <Card.Text className="small">February 12, 2025 / Admin</Card.Text>
            </Card.ImgOverlay>
          </Card>

          <Card className="text-white">
                    <Card.Img src="/images/photo1.jpg" alt="Vaibhavi Joshi" />

            <Card.ImgOverlay className="bg-dark bg-opacity-50 d-flex flex-column justify-content-end">
              <Button size="sm"  className="mb-2 button-layouts">
                Entertainment

              </Button>
              <Card.Title className="fw-bold">
                Urfi Javed Entertainment
 | Urfi Javed Bold Pics
              </Card.Title>
              <Card.Text className="small">February 1, 2025 / Admin</Card.Text>
            </Card.ImgOverlay>
          </Card>
    </div>
  )
}

export default Entertainment

