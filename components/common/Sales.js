import React from 'react'
import { Card, Button } from 'react-bootstrap'


const Sales = () => {
  return (
    <div>
         <h5 className="mb-3">Sales</h5>
          <Card className="text-white mb-3">
            <Card.Img src="/images/photo3.jpg" alt="Photo 3" />
            <Card.ImgOverlay className="bg-dark bg-opacity-50 d-flex flex-column justify-content-end">
              <div>
                <Button size="sm" className="mb-2 news-button-layouts">Sales</Button>
                <Card.Title className="fw-bold">
                  Is Tamanna Bhatia hot? Tamanna Bhatia Sales
                </Card.Title>
                <Card.Text className="small">February 12, 2025 / Admin</Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>

          <Card className="text-white mb-3">
            <Card.Img src="/images/photo3.jpg" alt="Photo 4" />
            <Card.ImgOverlay className="bg-dark bg-opacity-50 d-flex flex-column justify-content-end">
              <div>
                <Button size="sm" className="mb-2 news-button-layouts">Sales</Button>
                <Card.Title className="fw-bold">
                  Unfiltered Sales | Urfi Javed Bold Pics
                </Card.Title>
                <Card.Text className="small">February 11, 2025 / Admin</Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>

    </div>
  )
}

export default Sales
