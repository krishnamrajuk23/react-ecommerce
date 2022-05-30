import React from 'react';
import Card from '../../theme/components/card/Card';

export class CartItems extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { cartItems: []}
  }


  render() {
    return (
      <div>
        <Card title="Product name">
          Cart Items
        </Card>
      </div>
    )
  }
}