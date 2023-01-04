function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
   }
   

const Product = [
    {
      help: 'Need help? Call us: (+98) 0234 456 789',
      title: 'Yellow Pail',
      description: 'Our store',
      track: 'Track your order',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/daniel.jpg',
      productImageUrl: 'images/products/image-aqua.png',
    },
   ];
   
   export default Product
