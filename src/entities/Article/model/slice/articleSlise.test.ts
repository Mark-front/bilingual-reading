import { fetchArticleDataById } from '../../model/services/fetchArticleDataById/fetchArticleDataById';
import { ArticleType, TypeBlock } from '../../model/types/article';
import { articleReducer } from '../../model/slice/articleSlise';
import { IArticleSchema } from '../types/articleDetailShema';


const data = {
    'id': '1',
    'title': 'Javascript news',
    'subtitle': 'Что нового в JS за 2022 год?',
    'img': 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    'views': 1022,
    'createdAt': '26.02.2022',
    'type': [ ArticleType.IT ],
    'blocks': [
        {
            'id': '1',
            'type': TypeBlock.TEXT,
            'title': 'Заголовок этого блока',
            'paragraphs': [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
    ],
}
describe('articleSlice.test', () => {
    test('test get data pending', () => {
        const state: DeepPartial<IArticleSchema> = {
            isLoading: false,
        }

        expect(articleReducer(
            state as IArticleSchema,
            fetchArticleDataById.pending
        )).toEqual({
            isLoading: true,
            error: undefined,
        })
    });

    test('test get data fulfilled', () => {
        const state: DeepPartial<IArticleSchema> = {
            data,
        }

        expect(articleReducer(
            state as IArticleSchema,
            fetchArticleDataById.fulfilled
        )).toEqual({
            data: data,
            isLoading: false,
        })
    });

    test('test get data rejected', () => {
        const state: DeepPartial<IArticleSchema> = {
            isLoading: true,
            error: 'error',
        }

        expect(articleReducer(
            state as IArticleSchema,
            fetchArticleDataById.rejected
        )).toEqual({
            isLoading: false,
            error: 'error',
        })
    });
})