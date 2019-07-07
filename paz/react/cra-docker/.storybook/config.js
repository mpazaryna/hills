import { configure } from '@kadira/storybook';
import '../src/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

function loadStories() {
  require('../src/stories/about');
  require('../src/stories/button');
  require('../src/stories/footer');
  require('../src/stories/nav');
  require('../src/stories/index');
}

configure(loadStories, module);
