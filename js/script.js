const team = 
  [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];
  

const teamContainerHtml = document.querySelector('.team-container')

for (let i = 0; i < team.length; i++) {
  const currentTeamMember = team[i];

  // creiamo la carta
  const card = document.createElement('div');
  card.className = 'team-card';
  teamContainerHtml.append(card);
  
  // inseriamo l'immagine
  const cardImage = document.createElement('div');
  cardImage.className = 'card-image';
  card.append(cardImage);

  const image = document.createElement('img');
  image.src = `img/${currentTeamMember.image}`;
  image.alt = currentTeamMember.name;
  cardImage.append(image);
  
  // inseriamo il testo
  const cardText = document.createElement('div');
  cardText.className = 'card-text';
  card.append(cardText);

  const tmName = document.createElement('h3');
  tmName.append(currentTeamMember.name);
  cardText.append(tmName);

  const tmRole = document.createElement('p');
  tmRole.append(currentTeamMember.role);
  cardText.append(tmRole);


  
  
  // const teamImage = document.createElement('div');
  // teamImage.className = 'card-image';
  // teamImage.src = currentTeamMember.image;
  // teamImage.alt = currentTeamMember.name;
  // card.append(teamImage);



}