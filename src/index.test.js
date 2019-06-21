		import jsdom from 'jsdom';
		import fs from 'fs';
		import {
    expect
    } from 'chai';

    describe('Our first test', () => {
    it('should pass', () => {
    expect(true).to.equal(true);
    });
    });

		describe('index.html', () => {
			it('should have h1 that says welcome to Andela Ifeanyi', () => {
				const index = fs.readFileSync('./src/index.html', "utf-8");
				const {
					JSDOM
				} = jsdom;
				const dom = new JSDOM(index);
				const h1 = dom.window.document.getElementsByTagName("h1")[0];
				expect(h1.innerHTML).to.equal("welcome to Andela Ifeanyi");
				dom.window.close();
			})
		})