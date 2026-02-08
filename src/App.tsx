// data
import { content } from '../public/data';
// components
import Tabbed from './components/Tabbed/Tabbed';

export default function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}
