import './App.css';

import NavBar from './components/Navbar';
import Card from './components/Card';
function App() {
  // JSX
  //props
  const name = 'Mohammed Harrat';
  const paragraphe =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempora accusamus esse corrupti rerum itaque, voluptatem est necessitatibus deleniti. Quae, dolorum. Nam ad veniam natus officiis, ducimus consectetur cum in adipisci perspiciatis voluptatum numquam nihil, vitae ex blanditiis nulla magni? Eaque quos nemo reprehenderit doloremque a, perferendis pariatur quisquam quia minus cum earum, ad quis? Ipsum deleniti, laborum magni architecto quod unde voluptatibus explicabo sapiente nesciunt nisi corrupti est quia voluptas consectetur mollitia enim amet porro eum dolore nihil sed, odio cum. Nostrum, expedita est repellendus magnam commodi reiciendis? Dolore delectus quisquam accusantium sed maiores iusto. Optio voluptates nostrum labore laudantium harum consequuntur voluptatum et quisquam dicta officia sint facilis, vel id beatae! Repellendus quasi consequuntur omnis consectetur autem. Doloremque possimus placeat atque voluptatem ab pariatur excepturi velit similique quas quia asperiores, harum aut a voluptates maiores sequi tempora ut iusto corporis nobis fuga veniam? Voluptate debitis tenetur laudantium maxime, deleniti ratione esse eaque sint reprehenderit aspernatur, architecto optio voluptatibus ducimus voluptas mollitia quidem. Ea, modi maiores, incidunt excepturi voluptates consectetur mollitia, unde animi ad impedit similique? Sit quis explicabo ab odio enim sed harum eius ducimus, est culpa optio quibusdam dignissimos fugit dolorum unde praesentium minima pariatur repellendus? Sint suscipit fugit dolor cumque accusantium incidunt, veniam numquam tempore magni dolorem recusandae! Explicabo alias unde libero accusamus, voluptates eligendi facere sint distinctio ea qui sapiente soluta deleniti, reiciendis nemo aperiam dolorem nulla, corporis consectetur doloribus laudantium quasi possimus! Distinctio, numquam eos soluta repellat quibusdam nemo tempora placeat. Nemo error ullam blanditiis laborum sit itaque aliquam! Alias ratione corporis repellendus quidem? Assumenda qui ex perferendis ipsam quisquam animi iste deleniti aperiam ut magni, repellendus alias quia. Nostrum recusandae corrupti sed inventore mollitia doloremque officia maiores veritatis voluptatum? Nesciunt, dolores est aperiam consequatur earum velit nam blanditiis ad adipisci, cum aut! Iusto ab molestiae debitis labore eaque, hic obcaecati nam. Laudantium nemo blanditiis itaque non nesciunt numquam vitae laborum. Vero, dicta ex!';
  return (
    <div>
      <NavBar title={'React js'} />
      <div className="container">
        <Card
          p={paragraphe}
          title={'this is a title'}
          list={['mohammed', 'anass', 'ayoub']}
        />
      </div>

      <h1 className="text-center">{'HELLO '}</h1>
      <p className="text-center"> {1 + 2 + 3}</p>
    </div>
  );
}
{
}
export default App;
