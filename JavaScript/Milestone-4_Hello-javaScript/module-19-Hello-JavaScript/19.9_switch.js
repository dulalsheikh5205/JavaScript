const color = 'yellow';
if(color === 'green'){
    console.log('you are a green friend ');
}
else if(color === 'blue'){
    console.log('you are my blue friend');
}
else if(color === 'red'){
    console.log('you are my red friend');
}
else if(color === 'white'){
    console.log('you are my white friend');
}
else if(color === 'yellow'){
    console.log('you are my yellow himu friend ');
}
else{
    console.log('you are a black black friend');
}

// switch
switch(color /* == 'yellow' */){
    case 'green':
        console.log('you are a green friend');
        break;
    case 'blue':
        console.log('you are my blue friend');
        break;
    case 'white':
        console.log('you are my white friend');
        break;
    case 'red':
        console.log('you are my red friend');
        break;
    case 'yellow':
        console.log('you are my yellow himu friend');
        break;
    default:
        console.log('you are my kala kala friend');
}