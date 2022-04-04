export function menuSpecials () {
    let specials = document.createElement('div');
    specials.className = 'menu-category';
    
    let title = document.createElement('h2');
    title.textContent = 'House Special Cocktails'; 
    specials.appendChild(title);
    title.appendChild(document.createElement('div'));
    
    let names = ['Johny Silverhand', 'Jackie Welles'];
    let description = [
        'Two Tequila old fashioned with a splash of cerveza and a chili garnish.',
        'Shot of vodka on the rocks, lime juice, ginger beer...oh, and most importantly - a splansh of love.',
    ];

    for (let i = 0; i < names.length; i++) {
        let item = document.createElement('div');
        let p1 = document.createElement('p');
        p1.textContent = `${i+1}. ` + names[i];
        let p2 = document.createElement('p');
        p2.textContent = description[i];
        item.appendChild(p1);
        item.appendChild(p2);
        item.className = 'menu-item';
        specials.append(item);
    } 
    
    return specials;
};

export function menuFood () {
    let food = document.createElement('div');
    food.className = 'menu-category';

    let title = document.createElement('h2');
    title.textContent = 'Food and Beverages';
    food.appendChild(title);
    title.appendChild(document.createElement('div'));

    let names = [
        'All Foods Meat Delight',
        'Burrito XXL Rosado',
        'Nicola',
        'Spunky Monkey Mint',
    ];
    let description = [
        'Tastes just like real meat!',
        'Big burrito energy.',
        'America\'s favorite drink!',
        'For a minty punch to the face',
    ];

    for (let i = 0; i < names.length; i++) {
        let item = document.createElement('div');
        let p1 = document.createElement('p');
        p1.textContent = `${i+1}. ` + names[i];
        let p2 = document.createElement('p');
        p2.textContent = description[i];
        item.appendChild(p1);
        item.appendChild(p2);
        item.className = 'menu-item';
        food.append(item);
    } 
    
    return food;    
};

export function menuDrinks () {
    let drinks = document.createElement('div');
    drinks.className = 'menu-category';

    let title = document.createElement('h2');
    title.textContent = 'Drinks'; 
    drinks.appendChild(title);
    title.appendChild(document.createElement('div'));
    
    let names = [
        'Ab-synth',
        'Paul Night',
        'Randver',
        'Centzon Totochtin',
        'Pitorro',
        'O\'Dickin Whiskey',
    ];
    let description = [
        'Be Bohemian.',
        'A favorite drink among artists and dreamers.',
        'Beer for those who demand more.',
        'Tequila with no equal.',
        'Cheap. But could cost you a new pair of eyes.',
        'Whiskey. Anything else is just frills.'
    ];

    for (let i = 0; i < names.length; i++) {
        let item = document.createElement('div');
        let p1 = document.createElement('p');
        p1.textContent = `${i+1}. ` + names[i];
        let p2 = document.createElement('p');
        p2.textContent = description[i];
        item.appendChild(p1);
        item.appendChild(p2);
        item.className = 'menu-item';
        drinks.append(item);
    } 
    
    return drinks;
};

