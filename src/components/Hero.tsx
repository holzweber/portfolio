import { styles } from '../styles'
import { PlanetCanvas } from './canvas'


const Hero = () => {

let CONTENT = ["Artifical Intelligence.", "Data Science.", "Deep Learning.", "Digitalization.", "Full Stack Development."]


// Current sentence being processed
let _PART: number = 0;

// Character number of the current sentence being processed 
let _PART_INDEX: number = 0;

// Holds the handle returned from setInterval
let _INTERVAL_VAL: any= null;

// Element that holds the text
let _ELEMENT = document.querySelector("#text") as HTMLElement;

// Cursor element 
let _CURSOR = document.querySelector("#cursor") as HTMLElement;


// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  CONTENT[_PART].substring(0, _PART_INDEX + 1);
	if(_ELEMENT === null){
    _ELEMENT = document.querySelector("#text") as HTMLElement;
    if(_ELEMENT !== null){
      _ELEMENT!.innerHTML = text;
      _PART_INDEX++;

      	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === CONTENT[_PART]) {
		

    if(_CURSOR === null){
      _CURSOR = document.querySelector("#cursor") as HTMLElement;
      if(_CURSOR !== null){
        _CURSOR!.style.display = 'none';
        clearInterval(_INTERVAL_VAL);
        setTimeout(function() {
          _INTERVAL_VAL = setInterval(Delete, 20);
        }, 100);
      }
    }else{
      _CURSOR!.style.display = 'none';
      clearInterval(_INTERVAL_VAL);
      setTimeout(function() {
        _INTERVAL_VAL = setInterval(Delete, 20);
      }, 100);
    }

	}
    }
  }else{
    _ELEMENT!.innerHTML = text;
    _PART_INDEX++;

    	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === CONTENT[_PART]) {
		

    if(_CURSOR === null){
      _CURSOR = document.querySelector("#cursor") as HTMLElement;
      if(_CURSOR !== null){
        _CURSOR!.style.display = 'none';
        clearInterval(_INTERVAL_VAL);
        setTimeout(function() {
          _INTERVAL_VAL = setInterval(Delete, 20);
        }, 100);
      }
    }else{
      _CURSOR!.style.display = 'none';
      clearInterval(_INTERVAL_VAL);
      setTimeout(function() {
        _INTERVAL_VAL = setInterval(Delete, 20);
      }, 100);
    }

	}
  }
	


}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  CONTENT[_PART].substring(0, _PART_INDEX - 1);
  if(_ELEMENT === null){
    _ELEMENT = document.querySelector("#text") as HTMLElement;
    if(_ELEMENT !== null){
      _ELEMENT!.innerHTML = text;
      _PART_INDEX--;

      	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR!.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
    }
  }else{
    _ELEMENT!.innerHTML = text;
    _PART_INDEX--;

    	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR!.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
  }
	


}


  return (
    <div className='w-full v-screen mx-auto my-auto pb-10'>
    <section className='relative w-full v-screen mx-auto my-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <div className='flex flex-col justify-center items-center mt-5 typewriter'>
         <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
         <div className='w-1 sm:h-80 h-40 violet-gradient'/>
         </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Christopher</span></h1>
            
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Computer Scientist with a passion for <br className='sm:block hidden'/></p>
              <div className={`${styles.heroSubText} text-white`} id="text"></div><div id="cursor"></div>
          </div>
      </div>
      </section>
      <section className='relative w-full h-screen mx-auto justify-center'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <PlanetCanvas />
      </div>
    </section>
    </div>
  )


}

export default Hero