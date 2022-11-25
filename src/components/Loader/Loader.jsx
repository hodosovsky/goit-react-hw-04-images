//   state = {
//     gallery: null,
//     loading: false,
//   };
//   async componentDidMount() {
//     this.setState({ loading: true });
//     try {
//       await axios
//         .get(
//           'https://pixabay.com/api/?q=cat&page=1&key=30757055-8f8e35a6024963473ffe3e1a3&image_type=photo&orientation=horizontal&page=2&per_page=12'
//         )
//         .then(gallery => this.setState({ gallery: gallery.data }))
//         .finally(() => this.setState({ loading: false }));
//     } catch (error) {
//       console.log(error);
//     }
//   }

// render() {
//     return (
//       <div>
//         {this.state.loading && <RotatingLines />}
//         {this.state.gallery && <>{this.state.gallery.total}</>}
//       </div>
//     );
//   }
