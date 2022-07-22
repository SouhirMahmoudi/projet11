
export default function Carrousel(props){
    

const position = { index: 0 };
function next() {
    position.index === props.pictures.length - 1 // If end of array, index is 0, else index ++
      ? this.setState({ index: 0 })
      : this.setState({ index: position.index + 1 });
  }

 function prev() {
    position.index === 0 // If start of array, index is end of array, else index --
      ? this.setState({ index: props.pictures.length - 1 })
      : this.setState({ index: position.index - 1 });
  }

return props.pictures.length > 1
? (
    <div className="carrousel">
      <img
        className="carrousel__img"
        src={props.pictures[position.index]}
        alt=""
      />

      <svg
        onClick={() => prev()}
        className="carrousel__left"
        width="48"
        height="80"
        viewBox="0 0 48 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
          fill="white"
        />
      </svg>
      <svg
        onClick={() => next()}
        className="carrousel__right"
        width="48"
        height="80"
        viewBox="0 0 48 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
          fill="white"
        />
      </svg>
    </div>
)

: <div className="carrousel">
<img
  className="carrousel__img"
  src={props.pictures}
  alt=""
  key={props.pictures}
/>
</div>
}

 

