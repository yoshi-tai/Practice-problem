import pathlib
import sys
import unittest

sys.path.append(str(pathlib.Path(__file__).resolve().parents[1]))

from generate_problems_js import parse_markdown_answers, parse_small_child_problems


class GenerateProblemsJsTests(unittest.TestCase):
    def test_parse_markdown_answers_extracts_problem_numbers_and_answers(self):
        markdown = '''# Sample\n\n## 問題2　テスト\n\n1. a\n2. b\n\n**回答：4**\n\n## 問題3　テスト2\n\n**回答：2、3**\n'''

        result = parse_markdown_answers(markdown)

        self.assertEqual(result, {2: ['opt4'], 3: ['opt2', 'opt3']})

    def test_parse_small_child_problems_extracts_question_and_explanations(self):
        markdown = '''1. 5歳ごろの児の病気のとらえ方として正しいものはどれか。\n1. 入院し、母親と離れることも病気が原因だと理解し、我慢できる\n2. 病気を治すために必要な治療を理解し、積極的に参加できる\n3. 病気が体の中で起こっていることを理解し、表現できる\n4. 病気を自分の行いに対する罰だと考える\n\n回答番号 4\n1. 5歳ごろでは入院や母親との分離を病気の原因と結びつけて十分に理解することは難しい。\n2. 治療の必要性を論理的に理解し主体的に参加するのは学童期以降に近い。\n3. 体内で病気が起こるという内的・生理的理解はまだ十分ではない。\n4. 幼児期は自己中心性や魔術的思考により、病気を自分の行為への罰ととらえやすい。\n'''

        result = parse_small_child_problems(markdown)

        self.assertEqual(len(result), 1)
        self.assertEqual(result[0]['question_text'], '5歳ごろの児の病気のとらえ方として正しいものはどれか。')
        self.assertEqual(result[0]['answers'], ['opt4'])
        self.assertEqual(result[0]['options'][0][1], '入院し、母親と離れることも病気が原因だと理解し、我慢できる')
        self.assertTrue(any('幼児期は自己中心性や魔術的思考' in line for line in result[0]['answer_explanation_lines']))


if __name__ == '__main__':
    unittest.main()
