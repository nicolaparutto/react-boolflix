function StarsRating(props) {
   //Ricevo in voto in decimale dalla prop:
   const defaultVote = props.vote
   //Lo converto in un numero singolo e faccio in modo che diventino da 1 a 5:
   const voteConverted = Math.ceil(defaultVote / 2);

   let ratingStars = "";

   if (voteConverted === 0) {
      ratingStars = (
         <>
            <i className="fa-solid fa-star grey-star"></i>
            <i className="fa-solid fa-star grey-star"></i>
            <i className="fa-solid fa-star grey-star"></i>
            <i className="fa-solid fa-star grey-star"></i>
            <i className="fa-solid fa-star grey-star"></i>
         </>
      );
   } else if (voteConverted === 1) {
      ratingStars = (
         <>
            <i className="fa-solid fa-star yellow-star"></i>
            <i className="fa-solid fa-star grey-star"></i>
            <i className="fa-solid fa-star grey-star"></i>
            <i className="fa-solid fa-star grey-star"></i>
            <i className="fa-solid fa-star grey-star"></i>
         </>
      );
   } else if (voteConverted === 2) {
      ratingStars = (
         <>
            <i className="fa-solid fa-star yellow-star"></i>
            <i className="fa-solid fa-star yellow-star"></i>
            <i className="fa-solid fa-star grey-star"></i>
            <i className="fa-solid fa-star grey-star"></i>
            <i className="fa-solid fa-star grey-star"></i>
         </>
      );
   } else if (voteConverted === 3) {
      ratingStars = (
         <>
            <i className="fa-solid fa-star yellow-star"></i>
            <i className="fa-solid fa-star yellow-star"></i>
            <i className="fa-solid fa-star yellow-star"></i>
            <i className="fa-solid fa-star grey-star"></i>
            <i className="fa-solid fa-star grey-star"></i>
         </>
      );
   } else if (voteConverted === 4) {
      ratingStars = (
         <>
            <i className="fa-solid fa-star yellow-star"></i>
            <i className="fa-solid fa-star yellow-star"></i>
            <i className="fa-solid fa-star yellow-star"></i>
            <i className="fa-solid fa-star yellow-star"></i>
            <i className="fa-solid fa-star grey-star"></i>
         </>
      );
   } else if (voteConverted === 5) {
      ratingStars = (
         <>
            <i className="fa-solid fa-star yellow-star"></i>
            <i className="fa-solid fa-star yellow-star"></i>
            <i className="fa-solid fa-star yellow-star"></i>
            <i className="fa-solid fa-star yellow-star"></i>
            <i className="fa-solid fa-star yellow-star"></i>
         </>
      );
   }


   return (
      <div>{ratingStars}</div>
   )
}

export default StarsRating