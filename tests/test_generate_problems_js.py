import pathlib
import sys
import unittest

sys.path.append(str(pathlib.Path(__file__).resolve().parents[1]))

from generate_problems_js import parse_markdown_answers


class GenerateProblemsJsTests(unittest.TestCase):
    def test_parse_markdown_answers_extracts_problem_numbers_and_answers(self):
        markdown = '''# Sample\n\n## 問題2　テスト\n\n1. a\n2. b\n\n**回答：4**\n\n## 問題3　テスト2\n\n**回答：2、3**\n'''

        result = parse_markdown_answers(markdown)

        self.assertEqual(result, {2: ['opt4'], 3: ['opt2', 'opt3']})


if __name__ == '__main__':
    unittest.main()
