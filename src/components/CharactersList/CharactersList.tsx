interface Character {
    id:number;
    name: string;
    img: string;
}

export const CharactersList=() => {
    const characterList: Character[] = [
        {
            id: 1,
            name: 'Jon Snow',
            img: './src/assets/Jon-Snow.png',
        },
        {
            id: 2,
            name: 'Daenerys Targaryen',
            img: './src/assets/Daenerys-Targaryen.png',
        }
    ];
    return (
        <>
            {characterList.map((character) => (

                    <>
                        <h3>{character.name}</h3>
                        <img src={character.img}/>
                    </>
                )
            )}
        </>
    );

}
