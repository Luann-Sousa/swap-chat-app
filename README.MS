const CONVERSAS = [
    {
      id: '1',
      username: 'Luann',
      avatar:
        'https://ecoprintq.com.ar/wp-content/uploads/2017/07/recorte-joven-3.png',
      messegeTime: '2 days ago',
      messegeText: 'Ola, tudo bem Camila',
    },
    {
      id: '2',
      username: 'Camila Sousa',
      avatar:
        'https://ecoprintq.com.ar/wp-content/uploads/2017/07/recorte-joven-3.png',
      messegeTime: '1 days ago',
      messegeText: 'Ola, tudo bem Luann',
    },
    {
      id: '3',
      username: 'Luann',
      avatar:
        'https://ecoprintq.com.ar/wp-content/uploads/2017/07/recorte-joven-3.png',
      messegeTime: '2 days ago',
      messegeText: 'Quando eu poder agente se fala xau!',
    },
  ];


 <FlatList
          data={messeger_para?.messegens}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <WrapperContent>
              {item.user_id === '36cb4857-c806-4688-8a79-65fbdb3be395' ? (
                <WrapperMesserMe>
                  <CarMessegeMe messeger={item.messeger} />
                </WrapperMesserMe>
              ) : (
                <>
                  {item.user_me === '5e0de778-4f00-4338-a467-b0488647006b' && (
                    <>
                      <WrapperMesserTo>
                        <CarMessegeTo messeger={item.messeger} />
                      </WrapperMesserTo>
                    </>
                  )}
                </>
              )}
            </WrapperContent>
          )}
        />
